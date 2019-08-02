import React from "react";
import PlayerItem from "./PlayerItem";
import axios from "axios";
import { View, TextInput, Button, StyleSheet, TouchableHighlight, Text, ScrollView } from "react-native";


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {},
      _data: {}
    };
  }

  _loadPlayer(tag) {
    console.log(this.state.username);
    const player = "%23"+tag;
    console.log(player);
    const API_TOKEN =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjBjNDE0NDkxLWI3NmYtNDBmMS04ODAxLTQ5ZGU0MDc4M2UxNyIsImlhdCI6MTU2NDY2MDUwNywic3ViIjoiZGV2ZWxvcGVyLzNjYWE1NzU3LTY2MGItODkzOS05ZGZkLTQzYjljOTJhY2UxYiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE0OS4xNTQuMjIwLjEyMiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.vFiC-W_AHlLov_yxvwFm8orQOjmcgJJ_GA-xEIT903Q9LEjGVghxLQzejLpd2sKyCTXUYvSVHDM9xf8EDn5V3g";

    const config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + API_TOKEN
      }
    };

    axios
      .get("https://api.clashofclans.com/v1/players/" + player, config)
      .then(response => {
        this.setState({ _data: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder="Player" onChangeText={(username) => this.setState({username})} value={this.state.username}/>
        <Button
          style={styles.textinput}
          title="Rechercher"
          onPress={() => this._loadPlayer(this.state.username)}
        />
        
        {Object.entries(this.state._data).length > 0 && (
          <PlayerItem player={this.state._data} />
        )}
        <TouchableHighlight
         style={styles.button}
         onPress={() => this._loadPlayer("8UCG8COU")}>
         <Text> Megyland </Text>
        </TouchableHighlight>
        <TouchableHighlight
         style={styles.button}
         onPress={() => this._loadPlayer("2YROR22LC")}>
         <Text> Malocoxis </Text>
        </TouchableHighlight>
        <TouchableHighlight
         style={styles.button}
         onPress={() => this._loadPlayer("PORRUJR2")}>
         <Text> Woogie </Text>
        </TouchableHighlight>
        <TouchableHighlight
         style={styles.button}
         onPress={() => this._loadPlayer("COGPOOQQ")}>
         <Text> Fredo </Text>
        </TouchableHighlight>
        <TouchableHighlight
         style={styles.button}
         onPress={() => this._loadPlayer("LO8OCUGY2")}>
         <Text> Tamokiri </Text>
        </TouchableHighlight>
        <TouchableHighlight
         style={styles.button}
         onPress={() => this._loadPlayer("PRJ2G2V29")}>
         <Text> Ysestar </Text>
        </TouchableHighlight>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 40
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    borderColor: "#000000",
    borderWidth: 1,
    margin:1,
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});

export default Search;
