import { InjectionToken } from '@angular/core';

export const DYNAMIC_COMPONENT_DATA = new InjectionToken<any>('DynamicComponentData');

export enum ComponentType {
    anagram = 'anagram',
    stone_paper_scissors = 'stone-paper-scissors',
    guess_number = 'guess-number',
    tic_tac_toe = 'tic-tac-toe'
}
