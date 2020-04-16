import React from 'react';
import CalcButton from './CalcButton';
import CalcText from './CalcText';

import './Calc.css';
import './CalcButton.css';

type Props = {
    text: string,
    addSymbol: (symbol: string) => void,
    getResult: () => void,
    clearText: () => void
}


class Calc extends React.Component<Props> {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return <div>
            <table>
                <tbody>
                    <tr>
                        <th className="calc-col" colSpan={3}>
                            <CalcText text={this.props.text}/>
                        </th>
                        <th className="calc-col">
                            <CalcButton
                                className="equal-btn math-operation-btn"
                                onClick={() => this.props.getResult()}>
                                =
                        </CalcButton>
                        </th>
                    </tr>
                    <tr>
                        <th className="calc-col">
                            <CalcButton
                                onClick={() => this.props.addSymbol('7')}>
                                7
                        </CalcButton>
                        </th>
                        <th className="calc-col">
                            <CalcButton
                                onClick={() => this.props.addSymbol('8')}>
                                8
                        </CalcButton>
                        </th>
                        <th className="calc-col">
                            <CalcButton
                                onClick={() => this.props.addSymbol('9')}>
                                9
                        </CalcButton>
                        </th>
                        <th className="calc-col">
                            <CalcButton
                                className="math-operation-btn"
                                onClick={() => this.props.addSymbol('÷')}>
                                ÷
                        </CalcButton>
                        </th>
                    </tr>
                    <tr>
                        <th className="calc-col">
                            <CalcButton
                                onClick={() => this.props.addSymbol('4')}>
                                4
                        </CalcButton>
                        </th>
                        <th className="calc-col">
                            <CalcButton
                                onClick={() => this.props.addSymbol('5')}>
                                5
                        </CalcButton>
                        </th>
                        <th className="calc-col">
                            <CalcButton
                                onClick={() => this.props.addSymbol('6')}>
                                6
                        </CalcButton>
                        </th>
                        <th className="calc-col">
                            <CalcButton
                                className="math-operation-btn"
                                onClick={() => this.props.addSymbol('×')}>
                                ×
                        </CalcButton>
                        </th>
                    </tr>
                    <tr>
                        <th className="calc-col">
                            <CalcButton
                                onClick={() => this.props.addSymbol('1')}>
                                1
                        </CalcButton>
                        </th>
                        <th className="calc-col">
                            <CalcButton
                                onClick={() => this.props.addSymbol('2')}>
                                2
                        </CalcButton>
                        </th>
                        <th className="calc-col">
                            <CalcButton
                                onClick={() => this.props.addSymbol('3')}>
                                3
                        </CalcButton>
                        </th>
                        <th className="calc-col">
                            <CalcButton
                                className="math-operation-btn"
                                onClick={() => this.props.addSymbol('-')}>
                                -
                        </CalcButton>
                        </th>
                    </tr>
                    <tr>
                        <th className="calc-col">
                            <CalcButton
                                onClick={() => this.props.addSymbol('0')}>
                                0
                        </CalcButton>
                        </th>
                        <th className="calc-col">
                            <CalcButton
                                onClick={() => this.props.addSymbol('.')}>
                                .
                        </CalcButton>
                        </th>
                        <th className="calc-col">
                            <CalcButton
                                onClick={() => this.props.clearText()}>
                                C
                        </CalcButton>
                        </th>
                        <th className="calc-col">
                            <CalcButton
                                className="math-operation-btn"
                                onClick={() => this.props.addSymbol('+')}>
                                +
                        </CalcButton>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div >
    }
}

export default Calc;