import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api_url = import.meta.env.VITE_WEATHER_BASE_URL
const api_key = import.meta.env.VITE_WEATHER_API_KEY

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async () => {
    const response = await axios.get(
      `${api_url}current.json?key=${api_key}&q=india&aqi=no`
    );
    return response.data.current.condition.text;
  }
);

interface WeatherState {
  status: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  status: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch weather";
      });
  },
});

export default weatherSlice.reducer;

