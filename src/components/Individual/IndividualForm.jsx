import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, TextField, MenuItem, makeStyles } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import { useForm, Controller } from "react-hook-form";
import FormInput from "../shared/FormInput";
import FormButton from "../shared/FormButton";
import ImagePicker from "../shared/ImagePicker";
import { VALIDATION_REQUIRED } from "../../utils/constants";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));

const IndividualForm = ({ individualDetail, individualID, onSubmit }) => {
  const history = useHistory();
  const classes = useStyles();
  const { register, errors, control, handleSubmit } = useForm();

  return (
    <div>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <h1 style={{ paddingLeft: 8 }}>Add Individual</h1>
          </Grid>
          <Grid item>
            <FormInput
              name="firstName"
              label="First Name"
              defaultValue={individualDetail ? individualDetail.firstName : ""}
              inputRef={register({ required: true })}
              errors={errors.firstName}
              errorText={VALIDATION_REQUIRED}
              type="text"
            />
          </Grid>
          <Grid item>
            <FormInput
              name="lastName"
              label="Last Name"
              defaultValue={individualDetail ? individualDetail.lastName : ""}
              inputRef={register({ required: true })}
              errors={errors.lastName}
              errorText={VALIDATION_REQUIRED}
              type="text"
            />
          </Grid>
          <Grid item>
            <Controller
              as={
                <TextField select name="gender" label="Gender" fullWidth>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </TextField>
              }
              name="gender"
              defaultValue={
                individualDetail ? individualDetail.gender : "other"
              }
              rules={{ required: true }}
              control={control}
            />
          </Grid>
          <Grid item>
            <Controller
              as={
                <DatePicker
                  disableFuture
                  openTo="year"
                  format="yyyy-MM-dd"
                  label="Date of birth"
                  views={["year", "month", "date"]}
                />
              }
              name={"dob"}
              defaultValue={
                individualDetail ? new Date(individualDetail.dob) : new Date()
              }
              rules={{ required: true }}
              control={control}
            />
          </Grid>
          <Grid item>
            <ImagePicker individualID={individualID} />
          </Grid>
          <Grid item container justify="space-between">
            <FormButton label="Cancel" onClick={() => history.goBack()} />
            <FormButton label="Save" type="submit" />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default IndividualForm;
