import {
	View, 
	Text,
	ImageBackground,
	Image,
	TouchableOpacity,
} from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import tw from "twrnc"
import { FontAwesome } from '@expo/vector-icons'; 

const Menu = ({title, icon, sub}) => {
  return (
    <View style={tw`mt-[20px] px-[20px]`}>
        <TouchableOpacity>
            <View style={tw`flex flex-row my-[3px] items-center`}>
                <View style={tw`w-7 flex items-center justify-center`}>
                    <FontAwesome name={icon} style={tw`text-2xl text-gray-100`}/>
                </View>
                <View style={tw`flex-grow-1`}>
                    <Text style={tw`text-gray-100 text-[1rem] font-bold ml-4 uppercase`}>{title}</Text>
                    {sub && <Text style={tw`text-gray-400 text-[14px] font-medium ml-4`}>{sub}</Text>}
                </View>
                <Entypo name="chevron-right" style={tw`text-2xl text-gray-400`}/>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Menu