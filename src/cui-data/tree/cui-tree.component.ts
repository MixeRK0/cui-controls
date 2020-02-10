import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { TreeComponent, TreeNode} from 'angular-tree-component';
import {ComponentForDynamicInsert} from '../dynamic-container/dynamic-container.component';

@Component({
  selector: 'cui-tree',
  templateUrl: './cui-tree.component.html'
})
export class CuiTreeComponent {
  @ViewChild(TreeComponent)
  public tree: TreeComponent;

  @Input() public nodes;

  @Input() public options;

  @Input() public nodeTemplateComponent: ComponentForDynamicInsert;

  @Output() public selectedElement = new EventEmitter<TreeNode>();

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
}
