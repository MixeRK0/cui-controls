import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { TreeComponent, TreeNode} from 'angular-tree-component';
import {Observable} from 'rxjs';
import {ComponentForDynamicInsert} from '../dynamic-container/dynamic-container.component';

export interface DataTreeAsyncConfig<TYPE> {
  expandButtonText?: string,
  spawnRootsFunction?: (page?: number, pageSize?: number, sort?: Array<string>) => Observable<Array<TYPE>>,
  mapElementToNodeFunction?: (item: TYPE) => any,
  options?: any,
  nodeTemplateComponent?: ComponentForDynamicInsert,
  pageSize: number
}

@Component({
  selector: 'cui-tree-async',
  templateUrl: './cui-tree-async.component.html'
})
export class CuiTreeAsyncComponent<TYPE> implements OnInit {
  @ViewChild(TreeComponent)
  public tree: TreeComponent;

  @Input() public config: DataTreeAsyncConfig<TYPE>;

  @Output() public selectedElement = new EventEmitter<TreeNode>();

  public nodes: Array<any> = [];
  public currentPageNumber = 1;
  public isLoadedAllElements;
  public expandButtonText;

  AddNode (node, parentNode: TreeNode) {
    if (parentNode.data.children === undefined) {
      parentNode.data.children = [];
    }
    parentNode.data.children.push(node);
    parentNode.data.hasChildren = true;
    parentNode.treeModel.update();
  }

  CreateNode (id: number, element_id: number, name: string, hasChildren: boolean) {
    return {
      id: id,
      element_id: element_id,
      name: name,
      hasChildren: hasChildren,
    };
  }

  DeleteNode (node, tree) {
    const parentNode = node.realParent ? node.realParent : node.treeModel.virtualRoot;

    parentNode.data.children.splice(parentNode.data.children.indexOf(node.data), 1);
    tree.treeModel.update();
    if (parentNode.data.children.length === 0) {
      parentNode.data.hasChildren = false;
    }
  }

  SelectNode = ($event) =>   {
    this.selectedElement.emit($event.node);
  };

  SetFocusedNode (node: TreeNode) {
    this.tree.treeModel.setFocusedNode(node);
  }

  GetNodeById (id: number) {
    return this.tree.treeModel.getNodeById(id);
  }

  GetNodeBy (predicate) {
    return this.tree.treeModel.getNodeBy(predicate);
  }

  GetFocusedNode() {
    return this.tree.treeModel.getFocusedNode();
  }

  GetParent(node: TreeNode) {
    return node.parent;
  }

  AddRoots() {
    this.config.spawnRootsFunction(
      this.currentPageNumber,
      this.config.pageSize
    ).subscribe((elements: Array<TYPE>) => {
      for (const element of elements) {
        this.nodes.push(this.config.mapElementToNodeFunction(element))
      }
      this.tree.treeModel.update();

      this.isLoadedAllElements = elements.length < this.config.pageSize;
      this.currentPageNumber += 1;
    })
  }

  ngOnInit(): void {
    this.ResolveExpandButtonText();
    this.AddRoots();
  }

  ResolveExpandButtonText() {
    if (this.config.expandButtonText) {
      this.expandButtonText = this.config.expandButtonText;
    } else {
      this.expandButtonText = 'Показать следуюшие корневые узлы';
    }
  }
}
