import { Component, OnInit, Inject } from '@angular/core';
import { DynamicComponent } from '../models/dynamic-component';
import { DYNAMIC_COMPONENT_DATA, ComponentType } from '../constants';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.scss']
})
export class AnagramComponent implements DynamicComponent, OnInit {

  constructor(@Inject(DYNAMIC_COMPONENT_DATA) public data) {}

  ngOnInit() {
  }

  getComponentType(): ComponentType {
    return ComponentType.anagram;
  }

}
