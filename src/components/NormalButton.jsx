import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

NormalButton.propTypes = {
    onChange: PropTypes.func.isRequired,
};

function NormalButton(props) {
    return (
        <div>
            <Button
                variant="contained"
                size="small"
                onClick={props.onChange}
            >
            button
            </Button>
        </div>
    );
}

export default NormalButton;