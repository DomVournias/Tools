import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Typography from "./styles/Typography";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { GrPowerReset } from "react-icons/gr";
import tw from "twin.macro";

function App() {
  const [isCopied, setIsCopied] = useState(false);
  const [boxShadow, setBoxShadow] = useState({
    boxColor: "#f2f2f2",
    inset: true,
    x: 0,
    y: 0,
    blurRadius: 0,
    spreadRadius: 0,
    opacity: 0.75,
  });

  let Box = styled.div`
    ${(props) =>
      props.boxStyle &&
      css`
        background-color: ${boxShadow.boxColor};
        ${tw`
        absolute
        w-1/2
        h-1/2
        m-auto
        left-0
        right-0
        top-0
        bottom-0
        text-center
        `}
      `}
    box-shadow: ${boxShadow.inset
      ? `inset`
      : ``} ${`${boxShadow.x}px`} ${`${boxShadow.y}px`} ${`${boxShadow.blurRadius}px`} ${`${boxShadow.spreadRadius}px`} rgba(0,0,0, ${boxShadow.opacity});
  `;

  const shadowVal = Box.componentStyle.rules;

  const shadowMap = shadowVal.map((item) => {
    console.log(item);
    return item;
  });

  const handleCopy = () => {
    setIsCopied(true);
  };

  useEffect(() => {
    setTimeout(() => {
      if (isCopied) setIsCopied(false);
    }, 2000);
  }, [isCopied]);

  // console.log(shadowMap);

  const shadow = `${
    boxShadow.inset ? `inset` : ``
  } ${`${boxShadow.x}px`} ${`${boxShadow.y}px`} ${`${boxShadow.blurRadius}px`} ${`${boxShadow.spreadRadius}px`} rgba(0,0,0, ${
    boxShadow.opacity
  });`;

  const clipboard = `-webkit- box-shadow: ${shadow} -moz- box-shadow: ${shadow} box-shadow: ${shadow}`;

  return (
    <>
      <GlobalStyles />
      <Typography />
      <StyledApp>
        <Header>
          <h5>BoxShadow</h5>
          <p>This tool helps you create easily Box Shadows</p>
          <CopyToClipboard text={clipboard} onCopy={handleCopy}>
            <Results>
              {isCopied && <CopiedMessage>👍 copied!</CopiedMessage>}

              <p>-webkit- {shadowMap}</p>
              <p>-moz- {shadowMap}</p>
              <p>{shadowMap}</p>
            </Results>
          </CopyToClipboard>
        </Header>

        <Container>
          <Left>
            <WhiteSpace>
              <Box boxStyle></Box>
            </WhiteSpace>
          </Left>
          <Right>
            <Controls>
              <ResetBtn
                onClick={(event) =>
                  setBoxShadow({
                    ...boxShadow,
                    x: 0,
                    y: 0,
                    blurRadius: 0,
                    spreadRadius: 0,
                    opacity: 0.75,
                  })
                }
              >
                Reset
                <GrPowerReset />
              </ResetBtn>
              <TopSettings>
                <Color>
                  <label htmlFor="color">Pick a color </label>
                  <input
                    id="color"
                    type="color"
                    value={boxShadow.boxColor}
                    onChange={(event) =>
                      setBoxShadow({
                        ...boxShadow,
                        boxColor: event.target.value,
                      })
                    }
                  />
                </Color>
                <Inset>
                  <label htmlFor="inset">Inset / Outset </label>
                  <input
                    id="inset"
                    type="checkbox"
                    checked={boxShadow.inset ? true : false}
                    onChange={(event) =>
                      setBoxShadow({ ...boxShadow, inset: !boxShadow.inset })
                    }
                  />
                </Inset>
              </TopSettings>
              <Sliders>
                <Horizontal>
                  <label htmlFor="horizontal">Horizontal Length</label>
                  <span>
                    {boxShadow.inset === true ? shadowVal[5] : shadowVal[4]}
                  </span>
                  <input
                    id="horizontal"
                    type="range"
                    min="-100"
                    max="100"
                    step="5"
                    value={boxShadow.x}
                    onChange={(event) =>
                      setBoxShadow({ ...boxShadow, x: event.target.value })
                    }
                  />
                </Horizontal>
                <Vertical>
                  <label htmlFor="vertical">Vertical Length</label>
                  <span>
                    {boxShadow.inset === true ? shadowVal[7] : shadowVal[6]}
                  </span>
                  <input
                    id="vertical"
                    type="range"
                    min="-100"
                    max="100"
                    step="5"
                    value={boxShadow.y}
                    onChange={(event) =>
                      setBoxShadow({ ...boxShadow, y: event.target.value })
                    }
                  />
                </Vertical>
                <BlurRadius>
                  <label htmlFor="blurRadius">Blur Radius</label>
                  <span>
                    {boxShadow.inset === true ? shadowVal[9] : shadowVal[8]}
                  </span>
                  <input
                    id="blurRadius"
                    type="range"
                    min="0"
                    max="300"
                    value={boxShadow.blurRadius}
                    onChange={(event) =>
                      setBoxShadow({
                        ...boxShadow,
                        blurRadius: event.target.value,
                      })
                    }
                  />
                </BlurRadius>
                <SpreadRadius>
                  <label htmlFor="spreadRadius">Spread Radius</label>
                  <span>
                    {boxShadow.inset === true ? shadowVal[11] : shadowVal[10]}
                  </span>
                  <input
                    id="spreadRadius"
                    type="range"
                    min="0"
                    max="200"
                    value={boxShadow.spreadRadius}
                    onChange={(event) =>
                      setBoxShadow({
                        ...boxShadow,
                        spreadRadius: event.target.value,
                      })
                    }
                  />
                </SpreadRadius>
                <Opacity>
                  <label htmlFor="opacity">Opacity</label>
                  <span>
                    {boxShadow.inset === true ? shadowVal[13] : shadowVal[12]}
                  </span>
                  <input
                    id="opacity"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={boxShadow.opacity}
                    onChange={(event) =>
                      setBoxShadow({
                        ...boxShadow,
                        opacity: event.target.value,
                      })
                    }
                  />
                </Opacity>
              </Sliders>
            </Controls>
          </Right>
        </Container>
      </StyledApp>
    </>
  );
}

export default App;

const StyledApp = styled.div``;
const ResetBtn = styled.button`
  ${tw`
  w-[fit-content]
  py-1
  px-4
  absolute
  right-5
  top-5
  bg-[#2c2c2c]
  rounded
  text-white
  flex
  gap-1
  justify-center
  items-center
  cursor-pointer
  text-sm
  font-bold
  border-0
  stroke-current
  `}

  & path {
    ${tw`stroke-current`}
  }

  :hover {
    ${tw`duration-200 opacity-90`}
  }
`;

const CopiedMessage = styled.div`
  ${tw`
    absolute
    flex
    justify-center
    items-center
    w-full
    h-full
    m-auto
    left-0
    right-0
    top-0
    bottom-0
    text-center
    bg-[#000000ae]
    text-lg
    font-bold
    duration-300
  `}
  text-shadow: 2px 2px #0d9c00;
  border-radius: 20px;
`;

const Results = styled.div`
  ${tw`
  relative
  text-white
  bg-[#2c2c2c]
  w-[30%]
  ml-0
  py-4
  px-2
  rounded-[20px]
  cursor-pointer
`}
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const Container = styled.section`
  ${tw`
    flex
    w-screen
    h-screen
    gap-24
    justify-center
  `}
`;
const Header = styled.div`
  ${tw`
    flex
    flex-col
    m-12
    text-center
    items-center
    gap-8
  `}
`;

const Left = styled.aside`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: right;
`;

const WhiteSpace = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const Right = styled.aside`
  width: 50%;
  height: fit-content;
  display: flex;
  justify-content: left;
`;

const Controls = styled.div`
  position: relative;
  background-color: #fff;
  width: 50%;
  height: 50%;
  margin-left: 0em;
  padding: 2em 1em;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  & label {
    font-weight: 600;
    margin-right: 3px;
  }

  & span {
    padding: 0.2em 0.4em;
    margin-left: 3px;
    background-color: #2c2c2c;
    color: #fff;
    border-radius: 20px;
  }
`;

const TopSettings = styled.div`
  & div {
    padding: 0.7em 1em;
    align-items: center;
  }

  > :first-child {
    display: flex;
  }

  #color {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
  }

  #color::-webkit-color-swatch {
    border-radius: 50%;
  }
`;

const Sliders = styled.div`
  margin-top: 0.5em;

  & input {
    width: 100%;
    margin-top: 0.7em;
  }
  & div {
    padding: 0.7em 1em;
  }
`;

const Opacity = styled.div``;
const BlurRadius = styled.div``;
const Vertical = styled.div``;
const Horizontal = styled.div``;
const SpreadRadius = styled.div``;
const Color = styled.div``;
const Inset = styled.div``;
