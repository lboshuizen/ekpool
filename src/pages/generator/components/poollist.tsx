import { ScoreList } from "../../../domain";

interface Props {
  scores: ScoreList;
}

export const PoolList: React.FC<Props> = (props) => {
  const rows = props.scores.map((s, i) => {
    return (
      <tr>
        <td>{i + 1}</td>
        <td>
          {s[0]} - {s[1]}
        </td>
      </tr>
    );
  });

  return (
    <table className="table table-striped table-bordered">
      <tbody>{rows}</tbody>
    </table>
  );
};
