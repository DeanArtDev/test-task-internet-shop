import { rootMutation } from "@/store/consts";
import { MutationTree } from "vuex";
import {StateRoot} from "@/store/state";

export const createRootMutations = (): MutationTree<StateRoot> => ({
  [rootMutation.SET_LOADING]: function (state: StateRoot, payload: boolean): void {
    state.loading = payload;
  },
});
