import { carModels } from "@/mock/car-models";
import { Car } from "@/types/car.type";
import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ModelCard from "../base/model-card";

export default function Models() {
    const shuffleArray = (array: Car[])=> [...array].sort(()=> Math.random() - 0.5); 

    
    const [cars, setCars] = useState(shuffleArray(carModels));
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async()=>{
        setRefreshing(true)
        await new Promise(resolve => setTimeout(resolve, 1000))
        setCars(shuffleArray(carModels))
        setRefreshing(false)
    }


    return (
        <FlatList
            data={cars}
            renderItem={({ item }) => <ModelCard key={item.id} model={item} />}
            refreshing={refreshing}
            onRefresh={onRefresh}
            contentContainerStyle={styles.modelsContainer}
        />
    )
}

const styles = StyleSheet.create({
    modelsContainer: {
        gap: 12,
    },
})