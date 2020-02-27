import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";


function NormalTextField(props) {
    const{ onChange, value, title } = props;

      // const [pageState, setPage] = useState({
  //   buttonBool: false,
  //   textFieldStr: "",
  //   dropdown: ""
  // });

  // const ButtonFragment = (props) => {
  //   const handleButtonChange = () => {
  //     props.toggleButton(prevState => {
  //       return {
  //         ...prevState,
  //         buttonBool: !prevState.buttonBool
  //       }
  //     })
  //   }

  //   const handleTextField = (value) => {
  //     props.onChangeTextField(prevState => {
  //       return {
  //         ...prevState,
  //         textFieldStr: value
  //       }
  //     })
  //   }
  //   return (
  //     <NormalButton
  //       onChange={handleButtonChange}
  //     />
  //   )
  // }
    return (
        <div>
            <Typography variant="h5">
                {title}
            </Typography>
            <TextField
                value={value}
                onChange={onChange}
                type="number"
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

