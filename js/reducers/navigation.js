/**
* @flow
*/

'use strict';

import type {Action} from '../actions/types';

export type Tab = 'comics' | 'story';

type State = {
  tab: Tab;
};

const initialState: State = {tab: 'comics'};

function navigation(state: State = initialState, action: Action): State {
  if (action.type === 'SWITCH_TAB') {
    return {...state, tab: action.tab};
  }
  return state;
}

module.exports = navigation;
