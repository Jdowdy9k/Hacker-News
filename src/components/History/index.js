import React from 'react';
import History from './history';
import { connect } from 'react-redux';

function Historys (props) {
    if (props.history) {
        return (
            <>
                { renderHistory(props.history) }
            </>
        )
    }
    return null;
}

const renderHistory = history => {
    return history.map(history => {
        return <History history={ history }/>
    })
}

const mapStateToProps = state => {
    return {
        history: state.get('history')
    }
}

export default connect(mapStateToProps)(Historys)