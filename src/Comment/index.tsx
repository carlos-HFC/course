import { View, Text, FlatList } from 'react-native';

import { styles } from './style';

type CommentProps = {
  data: {
    name: string;
    city: string;
    comment: string;
  };
};

export function Comment(props: CommentProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={{ fontWeight: "bold" }}>Nome: </Text>
        {props.data.name}
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: "bold" }}>Cidade: </Text>
        {props.data.city}
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: "bold" }}>Comentário: </Text>
        {props.data.comment}
      </Text>
    </View>
  );
}