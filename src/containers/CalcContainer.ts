import { connect } from 'react-redux';
import { addSymbol, clearText, getResult } from '../store/actions';
import Calc from '../components/Calc';
import { ApplicationState } from '../store';


const mapStateToProps = (state: ApplicationState) => ({
    text: state.calc.text
});

const mapDispatchToProps = {
    addSymbol: (symbol: string) => addSymbol(symbol),
    getResult: () => getResult(),
    clearText: () => clearText()
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calc)