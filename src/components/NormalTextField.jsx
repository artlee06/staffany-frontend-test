import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";


function NormalTextField(props) {
    const{ onChange, value, title, type } = props;

    return (
        <div>
            <Typography variant="h5">
                {title}
            </Typography>
            <TextField
                value={value}
                onChange={onChange}
                type={type}
            >
            </TextField>
        </div>
    )
}

TextField.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default NormalTextField

