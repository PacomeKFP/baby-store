import {useState} from "react";
import {useSelector} from "react-redux";

// material-ui
import {
	Box,
	Button,
	Checkbox,
	Divider,
	FormControl,
	FormControlLabel,
	FormHelperText,
	Grid,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Stack,
	Typography,
	useMediaQuery,
} from "@mui/material";
import {useTheme} from "@mui/material/styles";

// third party
import {Formik} from "formik";
import * as Yup from "yup";

// project imports
import AnimateButton from "@ui-component/extended/AnimateButton";
import useScriptRef from "../../../../hooks/useScriptRef";

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Google from "@assets/images/icons/social-google.svg";
import AuthRepository from "@src/datasource/repositories/auth-repository.js";
import {redirect, useNavigate} from "react-router-dom";

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({...others}) => {
	const theme = useTheme();
	const scriptedRef = useScriptRef();
	const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
	const customization = useSelector((state) => state.customization);
	const [checked, setChecked] = useState(true);

	const googleHandler = async () => {
		console.error("Login");
	};

	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const navigate = useNavigate();

	return (
		<>
			<Grid container direction="column" justifyContent="center" spacing={2}>

				<Grid item xs={12}>
					<Box
						sx={{
							alignItems: "center",
							display: "flex",
						}}
					>
						<Divider sx={{flexGrow: 1}} orientation="horizontal"/>

						<Button
							variant="outlined"
							sx={{
								cursor: "unset",
								m: 2,
								py: 0.5,
								px: 7,
								borderColor: `${theme.palette.grey[100]} !important`,
								color: `${theme.palette.grey[900]}!important`,
								fontWeight: 500,
								borderRadius: `${customization.borderRadius}px`,
							}}
							disableRipple
							disabled
						>
							Connectez vous !
						</Button>

						<Divider sx={{flexGrow: 1}} orientation="horizontal"/>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					container
					alignItems="center"
					justifyContent="center"
				>
					<Box sx={{mb: 2}}>
						<Typography variant="subtitle1">
							Avec votre addresse mail et votre mot de passe
						</Typography>
					</Box>
				</Grid>
			</Grid>

			<Formik
				initialValues={{
					email: "admin@gmail.com",
					password: "password",
					submit: null,
				}}
				validationSchema={Yup.object().shape({
					email: Yup.string()
						.email("Doit etre une adresse mail valide")
						.max(255)
						.required("L'email est obligatoire"),
					password: Yup.string().max(255).required("Le mot de passe est requis"),
				})}
				onSubmit={async (values, {setErrors, setStatus, setSubmitting}) => {
					try {
						const response = await AuthRepository.login(values.email, values.password, () => navigate('/'))
						if (scriptedRef.current) {
							setStatus({success: true});
							setSubmitting(false);
						}


					} catch (err) {
						console.error(err);
						if (scriptedRef.current) {
							setStatus({success: false});
							setErrors({submit: err.message});
							setSubmitting(false);
						}
					}
				}}
			>
				{({
					  errors,
					  handleBlur,
					  handleChange,
					  handleSubmit,
					  isSubmitting,
					  touched,
					  values,
				  }) => (
					<form noValidate onSubmit={handleSubmit} {...others}>
						<FormControl
							fullWidth
							error={Boolean(touched.email && errors.email)}
							sx={{...theme.typography.customInput}}
						>
							<InputLabel htmlFor="outlined-adornment-email-login">
								Adresse mail
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-email-login"
								type="email"
								value={values.email}
								name="email"
								onBlur={handleBlur}
								onChange={handleChange}
								label="Adresse mail"
								inputProps={{}}
							/>
							{touched.email && errors.email && (
								<FormHelperText
									error
									id="standard-weight-helper-text-email-login"
								>
									{errors.email}
								</FormHelperText>
							)}
						</FormControl>

						<FormControl
							fullWidth
							error={Boolean(touched.password && errors.password)}
							sx={{...theme.typography.customInput}}
						>
							<InputLabel htmlFor="outlined-adornment-password-login">
								Mot de passe
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password-login"
								type={showPassword ? "text" : "password"}
								value={values.password}
								name="password"
								onBlur={handleBlur}
								onChange={handleChange}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
											size="large"
										>
											{showPassword ? <Visibility/> : <VisibilityOff/>}
										</IconButton>
									</InputAdornment>
								}
								label="Password"
								inputProps={{}}
							/>
							{touched.password && errors.password && (
								<FormHelperText
									error
									id="standard-weight-helper-text-password-login"
								>
									{errors.password}
								</FormHelperText>
							)}
						</FormControl>
						<Stack
							direction="row"
							alignItems="center"
							justifyContent="space-between"
							spacing={1}
						>
							<FormControlLabel
								control={
									<Checkbox
										checked={checked}
										onChange={(event) => setChecked(event.target.checked)}
										name="checked"
										color="primary"
									/>
								}
								label="Remember me"
							/>
							<Typography
								variant="subtitle1"
								color="secondary"
								sx={{textDecoration: "none", cursor: "pointer"}}
							>
								Mot de passe oublié ?
							</Typography>
						</Stack>
						{errors.submit && (
							<Box sx={{mt: 3}}>
								<FormHelperText error>{errors.submit}</FormHelperText>
							</Box>
						)}

						<Box sx={{mt: 2}}>
							<AnimateButton>
								<Button
									disableElevation
									disabled={isSubmitting}
									fullWidth
									size="large"
									type="submit"
									variant="contained"
									color="secondary"
									onClick={handleSubmit}
								>
									Se connecter
								</Button>
							</AnimateButton>
						</Box>
					</form>
				)}
			</Formik>
		</>
	);
};

export default FirebaseLogin;
