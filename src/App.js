import React, {
  Component,
} from "react";
import debounce from "lodash.debounce";
import Input from "./components/Input.js";
import SetUnits from "./components/SetUnits.js";
import WeatherReport from "./components/WeatherReport.js";
import SearchResults from "./components/SearchResults.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      loading: false,
      error: false,
      locationList: [],
      weatherData: {},
      selectedLocation: {
        id: 1277333,
        name: "Bengaluru",
      },
      showSearchResult: false,
      unit: "C",
    };
    this.locationRef =
      React.createRef();
  }

  componentDidMount() {
    this.locationRef.current.focus();
    this.getWeather(
      this.state.selectedLocation.id,
      this.state.unit
    );
  }

  componentDidUpdate(
    prevProps,
    prevState
  ) {
    if (
      this.state.selectedLocation.id !==
        prevState.selectedLocation.id ||
      this.state.unit !== prevState.unit
    ) {
      this.getWeather(
        this.state.selectedLocation.id,
        this.state.unit
      );
    }
  }

  searchLocations = debounce(
    (keyword) => {
      if (!keyword) {
        return;
      }
      const url = `https://api.weatherserver.com/weather/cities/${keyword}`;
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            locationList: res.results,
          });
        })
        .catch((err) => {
          this.setState({
            error: true,
          });
        });
    },
    500
  );

  getWeather(cityId, units) {
    this.setState({ loading: true });
    const url = `https://api.weatherserver.com/weather/current/${cityId}/${units}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          weatherData: res,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({ error: true });
      });
  }

  onUnitChange = (evt) => {
    this.setState({
      unit: evt.target.value,
    });
  };

  onSelectLocation = (
    selectedLocation
  ) => {
    this.setState({
      selectedLocation:
        selectedLocation,
      showSearchResult: false,
    });
    this.locationRef.current.value = "";
  };

  onLocationInputChange = (
    locationInput
  ) => {
    this.searchLocations(locationInput);
    this.setState({
      showSearchResult: true,
    });
  };

  render() {
    return (
      <div className="weather-app">
        <h1>WeatherWatch</h1>
        <Input
          ref={this.locationRef}
          onLocationInputChange={
            this.onLocationInputChange
          }
        />
        {this.state
          .showSearchResult && (
          <SearchResults
            data={
              this.state.locationList
            }
            selectLocation={
              this.onSelectLocation
            }
          />
        )}
        <SetUnits
          value={this.state.unit}
          onSet={this.onUnitChange}
        />
        {this.state.loading && (
          <div className="is-loading" />
        )}
        {this.state.error && (
          <div className="error-panel" />
        )}
        {!this.state.error &&
          !this.state.error && (
            <WeatherReport
              weatherData={
                this.state.weatherData
              }
              units={this.state.unit}
            />
          )}
      </div>
    );
  }
}

export default App;
