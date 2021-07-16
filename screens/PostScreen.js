import React, {useState, useRef} from 'react';
import { View, StyleSheet, Dimensions, TouchableWithoutFeedback, Text, Image, TouchableOpacity } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'

const PostScreen = ({ url, song, name, description }) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [col, setCol] = useState("#FFF")
  const [num, setNum] = useState(0)

  const Change = () => {
      col === "#FFF" ? setCol("red") : setCol("#FFF")
      if (col === "#FFF") {
          setNum(num + 1)
      }
      else if(col === "red" && num !== 0) {
          setNum(num - 1)
      }
  }

  const playPause = () => {
    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
  }

  return (
    <View style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: Dimensions.get("window").height - 55
    }}>
        <TouchableWithoutFeedback onPress={playPause}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                uri: url
                }}
                resizeMode="cover"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </TouchableWithoutFeedback>

        <View style={{
            position: "absolute",
            top: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
        }}>
            <Text style={{
                color: "#FFF",
                marginRight: 10
            }}>Following</Text>
            <Text style={{
                color: "#FFF",
                fontSize: 20,
                fontWeight: "bold",
                letterSpacing: 1
            }}>For You</Text>
        </View>

        <View style={{
            position: "absolute",
            bottom: 30,
            right: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>

            <View style={{
                borderWidth: 2,
                borderColor: "#FFF",
                borderRadius: 999,
                marginBottom: 20
            }}>
                <Image style={{
                    width: 50,
                    height: 50,
                    borderRadius: 999
                }} source={{ uri: "https://media.beam.usnews.com/d1/d8/8501ba714a21aed9a7327e02ade1/180515-10thingselonmusk-editorial.jpg" }} />
            </View>

            <View style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20
            }}>
                <TouchableOpacity onPress={Change}>
                    <Ionicons name="heart" size={50} color={col} />
                </TouchableOpacity>
                <Text style={{
                    color: "#FFF"
                }}>{num}</Text>
            </View>

            <View style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20
            }}>
                <MaterialCommunityIcons name="chat" size={50} color="#FFF" />
                <Text style={{
                    color: "#FFF"
                }}>2,000</Text>
            </View>

            <View style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 50
            }}>
                <MaterialCommunityIcons name="share" size={50} color="#FFF" />
                <Text style={{
                    color: "#FFF"
                }}>2,000</Text>
            </View>

        </View>

        <View style={{
            position: "absolute",
            bottom: 20,
            left: 20,
        }}>
            <Text style={{
                color: "#FFF"
            }}>{`@${name}`}</Text>
            <Text style={{
                color: "gray"
            }}>{description}</Text>
            <View style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: "row"
            }}>
                <Ionicons style={{
                    marginRight: 10
                }} name="musical-notes" size={20} color="#FFF" />
                <Text style={{
                    color: "#FFF"
                }}>{song}</Text>
            </View>
        </View>

    </View>
  );
}

export default PostScreen

const styles = StyleSheet.create({
  video: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});
