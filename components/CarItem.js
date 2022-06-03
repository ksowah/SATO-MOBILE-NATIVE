import React, { useState } from "react";
import {
	View,
	ScrollView,
	SafeAreaView,
	Text,
	ImageBackground,
	Image,
	TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Menu from "./Menu";
import items from "../items";

const CarItem = () => {
	const [locked, setLocked] = useState(false);

	return (
		<SafeAreaView>
			<ImageBackground
				source={require("../assets/background.png")}
				style={tw`min-h-[50rem] w-[100%]`}
				resizeMode="cover"
			>
				<View
					style={tw`p-[15px] flex-row items-center justify-between mb-[10px]`}
				>
					<TouchableOpacity>
						<FontAwesome name="cog" style={tw`text-2xl text-gray-100`} />
					</TouchableOpacity>
					<Text style={tw`text-gray-100 text-[16px] font-bold`}>SatoMobile</Text>
					<TouchableOpacity>
						<FontAwesome5 name="toolbox" style={tw`text-2xl text-gray-100`} />
					</TouchableOpacity>
				</View>

				<View style={tw`flex flex-row items-center justify-center`}>
					<Image
						source={require("../assets/battery.png")}
						style={tw`h-[2rem] w-[5.5rem] mr-4`}
					/>

					<Text style={tw`text-gray-100 text-[35px] font-bold`}>150 mi</Text>
				</View>

				<View
					style={tw`flex flex-row items-center justify-center w-[100%] mt-2`}
				>
					<Text style={tw`text-gray-100 font-bold text-xl`}>Parked</Text>
				</View>

				<View style={tw`flex-1 mb-13`}>
					<ScrollView>
						<View style={tw`flex flex-row justify-center mt-[175px]`}>
							<TouchableOpacity>
								<View
									style={tw`h-15 w-15 ml-[25px] border rounded-full border-gray-400 flex items-center justify-center`}
								>
									<FontAwesome5 name="fan" style={tw`text-2xl text-gray-100`} />
								</View>
							</TouchableOpacity>

							<TouchableOpacity>
								<View
									style={tw`h-15 w-15 ml-[25px] border rounded-full border-gray-400 flex items-center justify-center`}
								>
									<Entypo name="key" style={tw`text-2xl text-gray-100`} />
								</View>
							</TouchableOpacity>

							<TouchableOpacity onPress={() => setLocked(!locked)}>
								<View
									style={tw`h-15 w-15 ml-[25px] border rounded-full border-gray-400 flex items-center justify-center`}
								>
									<FontAwesome
										name={locked ? "lock" : "unlock"}
										style={tw`text-2xl text-gray-100`}
									/>
								</View>
							</TouchableOpacity>
						</View>
						{items.map((item) => (
							<Menu
								key={item.id}
								title={item.title}
								icon={item.icon}
								sub={item.subTitle}
							/>
						))}
					</ScrollView>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default CarItem;
