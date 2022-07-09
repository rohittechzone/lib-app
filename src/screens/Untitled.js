import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import CupertinoButtonDelete from "../components/CupertinoButtonDelete";
import CupertinoSegmentWithThreeTabs from "../components/CupertinoSegmentWithThreeTabs";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.ellipseRow}>
          <Svg viewBox="0 0 48.43 48.43" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(210,255,82,1)"
              cx={24}
              cy={24}
              rx={24}
              ry={24}
            ></Ellipse>
          </Svg>
          <Svg viewBox="0 0 48.43 48.43" style={styles.ellipse1}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(239,133,255,1)"
              cx={24}
              cy={24}
              rx={24}
              ry={24}
            ></Ellipse>
          </Svg>
          <Svg viewBox="0 0 48.43 48.43" style={styles.ellipse2}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(255,254,82,1)"
              cx={24}
              cy={24}
              rx={24}
              ry={24}
            ></Ellipse>
          </Svg>
        </View>
        <View style={styles.physicsRow}>
          <Text style={styles.physics}>Physics</Text>
          <Text style={styles.maths}>Maths</Text>
          <Text style={styles.chemistry}>Chemistry</Text>
        </View>
      </View>
      <View style={styles.ellipse3Stack}>
        <Svg viewBox="0 0 51.71 51.33" style={styles.ellipse3}>
          <Ellipse
            stroke="rgba(7,7,7,0.07)"
            strokeWidth={8}
            fill="rgba(239,236,236,1)"
            cx={26}
            cy={26}
            rx={22}
            ry={22}
          ></Ellipse>
        </Svg>
        <CupertinoButtonDelete
          iconName="ios-trash"
          icon="ios-add"
          style={styles.cupertinoButtonDelete}
        ></CupertinoButtonDelete>
      </View>
      <View style={styles.rect2}>
        <CupertinoSegmentWithThreeTabs
          text1="Puppies"
          text2="Kittens"
          text3="Cubs"
          segmentTextWrapper1="Untitled"
          text1="Physics"
          text2="Chemistry"
          text3="Maths"
          style={styles.cupertinoSegmentWithThreeTabs}
        ></CupertinoSegmentWithThreeTabs>
        <CupertinoButtonInfo
          caption="Search"
          style={styles.cupertinoButtonInfo}
        ></CupertinoButtonInfo>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 280,
    height: 72,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(172,168,168,0)",
    borderRadius: 13,
    shadowColor: "rgba(192,191,191,0.5)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderTopRightRadius: 15,
    marginTop: 664,
    alignSelf: "center"
  },
  ellipse: {
    width: 41,
    height: 41
  },
  ellipse1: {
    width: 41,
    height: 41,
    marginLeft: 53
  },
  ellipse2: {
    width: 41,
    height: 41,
    marginLeft: 48
  },
  ellipseRow: {
    height: 41,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 27,
    marginRight: 29
  },
  physics: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 12
  },
  maths: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    marginLeft: 55
  },
  chemistry: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    marginLeft: 45
  },
  physicsRow: {
    height: 14,
    flexDirection: "row",
    marginLeft: 27,
    marginRight: 22
  },
  ellipse3: {
    top: 0,
    left: 0,
    width: 52,
    height: 51,
    position: "absolute"
  },
  cupertinoButtonDelete: {
    height: 51,
    width: 52,
    position: "absolute",
    left: 0,
    top: 0,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0)",
    borderRadius: 50,
    shadowColor: "rgba(241,235,235,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.46,
    shadowRadius: 0,
    backgroundColor: "rgba(255,252,252,1)"
  },
  ellipse3Stack: {
    width: 52,
    height: 51,
    marginTop: -696,
    marginLeft: 311
  },
  rect2: {
    width: 290,
    height: 416,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(238,238,238,0.5)",
    borderRadius: 20,
    shadowColor: "rgba(227,226,226,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 80,
    marginLeft: 42
  },
  cupertinoSegmentWithThreeTabs: {
    height: 44,
    width: 279,
    marginTop: 15,
    marginLeft: 6
  },
  cupertinoButtonInfo: {
    height: 44,
    width: 141,
    marginTop: 288,
    marginLeft: 75
  }
});

export default Untitled;
