import { Image, ScrollView, StyleSheet, View } from "react-native";
import { carLogos } from "@/mock/car-logo";
import { CarBrand } from "@/types/car.type";


export default function Brands() {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}>
            {carLogos.map((brand: CarBrand) => (
                <View key={brand.slug} style={styles.brand}>
                    <Image source={{ uri: brand.image.thumb }} style={styles.image} />
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 12,
        paddingLeft: 14,
    },
    brand: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "#fff",
        boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.1)",
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
    },
    image: {
        width: 60,
        height: 50,
    },
})