import { View, Text } from 'react-native'
import {useState} from 'react'
import { ETHPrice, NFTTitle } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsDesc = ({data}) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  return (<>
    <View style={{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <NFTTitle 
      title={data.name} 
      subTitle={data.creator}
      titleSize={SIZES.extraLarge}
      subTitleSize={SIZES.font}
      />

      <ETHPrice price={data.price} />
    </View>
    <View style={{ marginVertical: SIZES.extraLarge}}>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.font,
        color: COLORS.primary,
      }}>Description
      </Text>
      <View style={{marginTop:SIZES.base}}>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.secondary,
          lineHeight: SIZES.large
        }}>
          {text}
          {!readMore && '...'}
        </Text>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.semiBold,
          color: COLORS.primary
        }}
        onPress ={()=>{
          if(!readMore){
            setText(data.description);
            setReadMore(true);
          }else{
            setText(data.description.slice(0, 100));
            setReadMore(false);
          }
        }}
        >
          {readMore ? 'Show Less' : 'Read More'}
        </Text>
      </View>
    </View>      

    </>
  )
}

export default DetailsDesc