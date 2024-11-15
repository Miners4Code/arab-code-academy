import styles from "./page.module.css";
import { Flex, Text, Box } from "@chakra-ui/react";
import SimpleCard from "@/components/SimpleCard/SimpleCard";
import ACAButton from "@/components/ACAButton/ACAButton";
import eduLogo from "@/assets/eduLogo.png";
import CustomIcon from "@/icons/Chalkboard";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Box display={"flex"} shadow= "0px 1px 20px 3px #00000040">
        <SimpleCard text="قاموس المصطلحات التقنية" src={eduLogo} fontType="secondary">
          <ACAButton
            text="المسارات التعليمية"
            icon={<CustomIcon />}
            bg="cyan"
            weight="900"
            size="md"
          />
        </SimpleCard>
        <SimpleCard text="قاموس المصطلحات التقنية" src={eduLogo} fontType="secondary">
          <ACAButton
            text="المسارات التعليمية"
            icon={<CustomIcon />}
            bg="cyan"
            weight="900"
            size="md"
          />
        </SimpleCard>
        <SimpleCard text="قاموس المصطلحات التقنية" src={eduLogo} fontType="secondary">
          <ACAButton
            text="المسارات التعليمية"
            icon={<CustomIcon />}
            bg="cyan"
            weight="900"
            size="md"
          />
        </SimpleCard>

        </Box>
      </main>
    </div>
  );
}
