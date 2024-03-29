import magnifier from "../../assets/images/magnifier.png";
import { useEffect, useState } from "react";
import { Tokens, tokens } from "../../assets/data";
import { Input, Search, Wrapper } from "./InputSearchStyles";

type Props = { handler: (handler: () => Tokens) => void };

const InputSearch: React.FC<Props> = ({ handler }: Props) => {
  const [prompt, setPrompt] = useState("");
  const handlePrompt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      handler(() =>
        tokens.filter((token) =>
          token.title.toLowerCase().includes(prompt.toLowerCase())
        )
      );
    }, 300);
    return () => {
      clearTimeout(identifier);
    };
  }, [prompt, handler]);

  return (
    <Wrapper>
      <Input
        placeholder="Which token would you like to swap?"
        onChange={handlePrompt}
        autoFocus
        id="search"
        name="search"
        type="text"
      />

      <Search>
        <img src={magnifier} alt="magnifier" />
      </Search>
    </Wrapper>
  );
};

export default InputSearch;
