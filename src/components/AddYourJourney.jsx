import React, { useState } from "react";
import {
    TextField,
    Grid,
    Box,
    FormControlLabel,
    Checkbox,
    Autocomplete,
    Button
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "../styles/LandingPage.scss";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function AuctionCar() {
    const [journeyName, setjourneyName] = useState("");
    const [postalCodeFrom, setPostalCodeFrom] = useState("");
    const [postalCodeTo, setPostalCodeTo] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [transportMode, setTransportMode] = useState([]);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate(); // Initialize navigate 

    const postalCodesFrom = [
        "80331 Munchen",
        "85748 Garching Bei Munchen",
        "86836 Klosterlechfeld",
        "85716 Unterschleissheim",
    ];
    const postalCodesTo = [
        "80331 Munchen",
        "85748 Garching Bei Munchen",
        "86836 Klosterlechfeld",
        "85716 Unterschleissheim",
    ];
    const transportModesOptions = [
        "Car",
        "Public transport: Bus and Trains",
        "Accessibility Routes",

    ];

    const validate = () => {
        const errors = {};
        if (!journeyName.trim()) {
            errors.journeyName = "This field is required";
        }

        return errors;
    };

    const handleBlur = (event) => {
        const { name } = event.target;
        const fieldErrors = validate();
        setErrors({ ...errors, [name]: fieldErrors[name] });
    };



    const handlePostalCodeFromChange = (event, newValue) => {
        setPostalCodeFrom(newValue);
    };

    const handlePostalCodeToChange = (event, newValue) => {
        setPostalCodeTo(newValue);
    };


    const handleTransportModeChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setTransportMode((prev) => [...prev, value]);
        } else {
            setTransportMode((prev) => prev.filter((item) => item !== value));
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        navigate("/myauctions"); // Redirect to myauctionspage
    };

    return (
        <div>
            <div className="pageHeading">Save Your Journey</div>
            <Box
                component="form"
                className="auctionACarContainer"
                sx={{ padding: "20px 40px", maxWidth: "100%" }}
                onSubmit={handleSubmit}
                noValidate
            >
                <div className="paragraph"> Create a detailed plan for your upcoming travel to ensure a smooth and enjoyable trip. </div>

                <Grid container spacing={3} className="aboutEventContainer">
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <div className="aboutEventField">
                            <TextField
                                label="Journey Name"
                                name="journeyName"
                                value={journeyName}
                                onBlur={handleBlur}
                                onChange={(e) => setjourneyName(e.target.value)}
                                error={!!errors.journeyName}
                                helperText={errors.journeyName}
                                fullWidth
                            />
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <div className="aboutEventField">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Start Date"
                                    value={startDate}
                                    onChange={(newValue) => setStartDate(newValue)}
                                    renderInput={(params) => <TextField {...params} fullWidth />}
                                />
                            </LocalizationProvider>
                        </div>
                    </Grid>




                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <div className="aboutEventField">
                            <Autocomplete
                                options={postalCodesFrom}
                                value={postalCodeFrom}
                                onChange={handlePostalCodeFromChange}
                                renderInput={(params) => (
                                    <TextField {...params} label="Depart From" />
                                )}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <div className="aboutEventField">
                            <Autocomplete
                                options={postalCodesTo}
                                value={postalCodeTo}
                                onChange={handlePostalCodeToChange}
                                renderInput={(params) => (
                                    <TextField {...params} label="Arrive To" />
                                )}
                            />
                        </div>
                    </Grid>
                    </Grid>
                    <div className="aboutEventContainer">

                        <div className="paragraph1" > Select Your Preferred Transport </div>
                         {transportModesOptions.map((option) => (
                            <FormControlLabel
                                key={option}
                                control={
                                    <Checkbox
                                        checked={transportMode.includes(option)}
                                        onChange={handleTransportModeChange}
                                        value={option}
                                    />
                                }
                                label={option}
                            />
                        ))}
                     </div>
 
                <div className="aboutEventContainer" >
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="secondaryButton"
                     

                    >
                        Find routes
                    </Button>
                </div>
            </Box>
        </div>
    );
}

export default AuctionCar;
