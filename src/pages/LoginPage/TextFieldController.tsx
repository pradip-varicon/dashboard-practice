import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { TextFieldControllerPropsType } from "../../interfaces/authTypes";

export const TextFieldController: React.FC<TextFieldControllerPropsType> = ({
  name,
  control,
  label,
  type = "text",
}) => (
  <Controller
    name={name}
    control={control}
    defaultValue=""
    render={({ field, fieldState: { error } }) => (
      <TextField
        {...field}
        label={label}
        variant="outlined"
        type={type}
        fullWidth
        margin="normal"
        error={!!error}
        helperText={error?.message}
      />
    )}
  />
);
