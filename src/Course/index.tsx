import { View, Text, FlatList, ScrollView } from 'react-native';

import { Carousel } from "../Carousel";
import { Comment } from "../Comment";
import { Form } from "../Form";

import { styles } from './style';

const COURSE = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
  "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1154083/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
  "https://blog.rocketseat.com.br/content/images/2018/12/nodejs-vale-a-pena-vantagens.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png",
];

const COMMENTS = [
  {
    name: "Rafael",
    city: "São Paulo",
    comment: "Este curso é fantástico",
  },
  {
    name: "Eder",
    city: "Santos",
    comment: "Adorei este curso",
  },
  {
    name: "Fernando",
    city: "Rio de Janeiro",
    comment: "Recomendarei este curso para todos os meus amigos",
  },
  {
    name: "Eduardo",
    city: "Guarulhos",
    comment: "Aprendi bastante",
  },
  {
    name: "Caio",
    city: "São Paulo",
    comment: "Este curso é muito bom",
  },
];

export function Course() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Curso de JavaScript</Text>
      </View>

      <Carousel images={COURSE} />

      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          <Text style={{ fontWeight: "bold" }}>Descrição: </Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora et ut eligendi ab incidunt quas minima temporibus inventore mollitia nemo dignissimos sint explicabo dolore laboriosam in, possimus cum vitae atque!
          Earum consequuntur perferendis totam non, aperiam magnam ullam corrupti, eligendi cum dignissimos optio maiores. Laborum consectetur amet, sunt aspernatur tempora eum fugit, accusantium provident necessitatibus repudiandae, magni officia labore facilis?
          Aut deleniti sapiente explicabo consequatur rerum libero maxime dolores quia repellat ipsa consequuntur, vero corrupti unde. Voluptas deserunt rem doloremque, assumenda facilis perferendis dolore tempora quas quasi aut ex totam?
        </Text>
        <Text style={styles.descriptionText}>
          <Text style={{ fontWeight: "bold" }}>Valor: </Text>
          R$ 2500,00
        </Text>
      </View>

      <View style={styles.list}>
        <Text style={styles.listTitle}>
          Comentários
        </Text>

        <View style={styles.listContent}>
          <FlatList
            nestedScrollEnabled
            contentContainerStyle={{ gap: 24 }}
            data={COMMENTS}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item }) => <Comment data={item} />}
          />
        </View>
      </View>

      <Form />
    </View>
  );
}