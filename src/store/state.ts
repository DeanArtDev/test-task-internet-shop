export type StateRoot = {
  loading: boolean;
};

export const createRootState = (): StateRoot => ({
  loading: false,
});
