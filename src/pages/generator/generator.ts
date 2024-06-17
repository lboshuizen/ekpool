import { shuffle } from "lodash";

import { ScoreList } from "../../domain";

export const generator = (n: number, shuffled: boolean) => {
  const xs: ScoreList = [];

  for (let l = 0; l <= n; l++) {
    for (let r = 0; r < l; r++) {
      xs.push([l, r]);
      xs.push([r, l]);
    }
    xs.push([l, l]);
  }

  if (shuffled) {
    return shuffle(shuffle(xs));
  }

  return xs;
};
