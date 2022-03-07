import { GetterTree } from "vuex";
import {StateRoot} from "@/store/state";

export const createRootGetters = (): GetterTree<StateRoot, StateRoot> => ({
  loading: function (state: StateRoot): StateRoot["loading"] {
    return state.loading;
  },
});
