import { View, Image, ScrollView } from 'react-native';

import { styles } from './style';

type CarouselProps = {
  images: string[];
};

export function Carousel(props: CarouselProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {props?.images?.map((uri, i) => (
        <View style={styles.container} key={i}>
          <Image style={styles.image} source={{ uri }} />
        </View>
      ))}
    </ScrollView>
  );
}