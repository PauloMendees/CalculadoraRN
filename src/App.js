/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type { Node } from 'react';
import { SafeAreaView } from 'react-native';
import Style from './style'
import Button from './Button/Button';
import GreenButton from './Button/GreenButton';
import ButtonGreenText from './Button/ButtonGreenText';
import ClearButton from './Button/ClearButton';
import Visor from './Visor/Visor';

const App: () => Node = () => {
  const [displayNumber, setDisplayNumber] = useState('0')
  const [clearDisplay, setClearDisplay] = useState(false)
  const [operation, setOperation] = useState(null)
  const [values, setValues] = useState([0, 0])
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if(current === 0){
      setValues([parseFloat(displayNumber), 0])
    }
    if(current === 1){
      setValues([values[0], parseFloat(displayNumber)])
    }

  }, [displayNumber])

  return (
    <SafeAreaView style={Style.container}>
      <SafeAreaView style={{flexGrow: 1, width: '100%'}}>
        <Visor displayNumber={displayNumber} />
      </SafeAreaView>
      <SafeAreaView style={{flexGrow: 0}}>
        <SafeAreaView style={Style.line}>
          <ClearButton label="C" setDisplayNumber={setDisplayNumber} setOperation={setOperation} setValues={setValues} setCurrent={setCurrent} setClearDisplay={setClearDisplay} />
          <ButtonGreenText label="()" />
          <ButtonGreenText label="%" />
          <ButtonGreenText label="/" current={current} setCurrent={setCurrent} setOperation={setOperation} setClearDisplay={setClearDisplay} />
        </SafeAreaView>
        <SafeAreaView style={Style.line}>
          <Button label="7" displayNumber={displayNumber} setDisplayNumber={setDisplayNumber} current={current} setValues={setValues} clearDisplay={clearDisplay} setClearDisplay={setClearDisplay} />
          <Button label="8" displayNumber={displayNumber} setDisplayNumber={setDisplayNumber} current={current} setValues={setValues} clearDisplay={clearDisplay} setClearDisplay={setClearDisplay} />
          <Button label="9" displayNumber={displayNumber} setDisplayNumber={setDisplayNumber} current={current} setValues={setValues} clearDisplay={clearDisplay} setClearDisplay={setClearDisplay} />
          <ButtonGreenText label="X" current={current} setCurrent={setCurrent} setOperation={setOperation} setClearDisplay={setClearDisplay} />
        </SafeAreaView>
        <SafeAreaView style={Style.line}>
          <Button label="4" displayNumber={displayNumber} setDisplayNumber={setDisplayNumber} current={current} setValues={setValues} clearDisplay={clearDisplay} setClearDisplay={setClearDisplay} />
          <Button label="5" displayNumber={displayNumber} setDisplayNumber={setDisplayNumber} current={current} setValues={setValues} clearDisplay={clearDisplay} setClearDisplay={setClearDisplay} />
          <Button label="6" displayNumber={displayNumber} setDisplayNumber={setDisplayNumber} current={current} setValues={setValues} clearDisplay={clearDisplay} setClearDisplay={setClearDisplay} />
          <ButtonGreenText label="-" current={current} setCurrent={setCurrent} setOperation={setOperation} setClearDisplay={setClearDisplay} />
        </SafeAreaView>
        <SafeAreaView style={Style.line}>
          <Button label="1" displayNumber={displayNumber} setDisplayNumber={setDisplayNumber} current={current} setValues={setValues} clearDisplay={clearDisplay} setClearDisplay={setClearDisplay} />
          <Button label="2" displayNumber={displayNumber} setDisplayNumber={setDisplayNumber} current={current} setValues={setValues} clearDisplay={clearDisplay} setClearDisplay={setClearDisplay} />
          <Button label="3" displayNumber={displayNumber} setDisplayNumber={setDisplayNumber} current={current} setValues={setValues} clearDisplay={clearDisplay} setClearDisplay={setClearDisplay} />
          <ButtonGreenText label="+" current={current} setCurrent={setCurrent} setOperation={setOperation} setClearDisplay={setClearDisplay} />
        </SafeAreaView>
        <SafeAreaView style={Style.line}>
          <Button label="+/-" setCurrent={setCurrent} />
          <Button label="0"  displayNumber={displayNumber} setDisplayNumber={setDisplayNumber} current={current} setValues={setValues} clearDisplay={clearDisplay} setClearDisplay={setClearDisplay} />
          <Button label="."  displayNumber={displayNumber} setDisplayNumber={setDisplayNumber} current={current} setValues={setValues} clearDisplay={clearDisplay} setClearDisplay={setClearDisplay} />
          <GreenButton label="=" operation={operation} values={values} setValues={setValues} setDisplayNumber={setDisplayNumber} setCurrent={setCurrent} />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default App;
