import { Wrapper } from "./FrequentTokensStyles";
import TokenDescription from "./TokenDescription";

type Props = {};

const FrequentTokens = (props: Props) => {
  return (
    <Wrapper>
      {["MATIC", "DAI", "WETH", "WMATIC"].map((x) => (
        <TokenDescription key={x} title={x} />
      ))}
    </Wrapper>
  );
};

export default FrequentTokens;
