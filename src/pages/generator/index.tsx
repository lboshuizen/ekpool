import React, { useState } from "react";

import { ScoreList } from "../../domain";
import { PoolList } from "./components/poollist";
import { generator } from "./generator";

interface Props {}
export const PoolGenerator: React.FC<Props> = (props) => {
  const [maxScore, setScore] = useState<number>(5);
  const [pool, setPool] = useState<ScoreList>([]);
  const [shuffle, setShuffle] = useState<boolean>(true);

  const updateMax = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const v = ev.currentTarget.value;
    const n = parseInt(v, 10);
    if (n > 0) {
      setScore(n);
    }
  };

  const updateShuffle = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setShuffle(ev.currentTarget.checked);
  };

  const generate = (n: number) => {
    const xs = generator(n, shuffle);
    setPool(xs);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            value={maxScore}
            onChange={updateMax}></input>
        </div>
        <div className="col-md-1">
          <label className="form-check-label">Shuffle&nbsp;</label>
          <input
            type="checkbox"
            value="shuffle"
            className="form-check-input"
            checked={shuffle}
            onChange={updateShuffle}></input>
        </div>
        <div className="col-md-1">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => generate(maxScore)}>
            Generate
          </button>
        </div>
      </div>
      <PoolList scores={pool}></PoolList>
    </div>
  );
};
