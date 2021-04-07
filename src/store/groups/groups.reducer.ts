import { Group } from '../../ts/interfaces/payments/group.interface';
import { GroupActionsType, CREATE_GROUP, UPDATE_GROUP } from './groups.types';

interface GroupState {
  groups: Group[];
}

const initialState: GroupState = {
  groups: [
    { id: 'asdasd', name: 'Hey que tal chavales' },
    { id: 'asdasdaaaa', name: 'aaaaaa' },
  ],
};

function reducer(state = initialState, action: GroupActionsType): GroupState {
  switch (action.type) {
    case CREATE_GROUP:
      return { ...state, groups: [action.payload, ...state.groups] };
    case UPDATE_GROUP:
    default:
      return state;
  }
}

export default reducer;
