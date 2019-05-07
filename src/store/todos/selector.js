import { createSelector } from "reselect";

const allIds = state => state.map(item => item.id);
