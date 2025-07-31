export interface SettingItemProps {
    id: string;
    icon: React.ReactNode;
    title: string;
    subtitle?: string;
    hasArrow?: boolean;
    hasSwitch?: boolean;
    switchValue?: boolean;
    onPress?: () => void;
    onSwitchChange?: (value: boolean) => void;
}