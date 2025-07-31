import { ChevronRight } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { SettingItemProps } from "./types";
export function SettingItem({
    id,
    icon,
    title,
    subtitle,
    hasArrow,
    hasSwitch,
    switchValue,
    onPress,
    onSwitchChange,
}: SettingItemProps) {
    return (
        <TouchableOpacity
            key={id}
            style={styles.itemButton}
            onPress={onPress}
            activeOpacity={onPress ? 0.7 : 1}
        >
            <View style={styles.itemInner}>
                {/* 왼쪽 아이콘과 텍스트 영역 */}
                <View style={styles.itemLeft}>
                    <View style={styles.iconWrapper}>{icon}</View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.itemTitle}>{title}</Text>
                        {subtitle && <Text style={styles.itemSubtitle}>{subtitle}</Text>}
                    </View>
                </View>

                {/* 오른쪽 스위치 또는 화살표 */}
                <View style={styles.itemRight}>
                    {hasSwitch && typeof switchValue === "boolean" && onSwitchChange && (
                        <TouchableOpacity
                            onPress={() => onSwitchChange(!switchValue)}
                            style={[
                                styles.switchContainer,
                                { backgroundColor: switchValue ? "#FFA500" : "#e9dcc9" },
                            ]}
                        >
                            <View
                                style={[
                                    styles.switchCircle,
                                    { marginLeft: switchValue ? 18 : 0 },
                                ]}
                            />
                        </TouchableOpacity>
                    )}
                    {hasArrow && (
                        <ChevronRight size={18} color="#ccc" />
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
}
