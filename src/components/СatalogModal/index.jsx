import * as React from "react";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import * as S from "./style.js";
import { Typography } from "@mui/material";

import image_1 from "assets/images/PopularProducts/Product1.png";
import image_2 from "assets/images/PopularProducts/Product2.png";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function CatalogModal({ open, handleCatalog, handleClose }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Modal className="modal" open={open} onClose={handleClose}>
        <S.CatalogWarpper>
          <S.CatalogBox>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                textAlign: "flex-start",
                alignItems: "center",
                justifyContent: 'space-between' 
              }}
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                <Tab label="Накладные электронные замки" {...a11yProps(0)} />
                <Tab label="Врезные электронные замки" {...a11yProps(1)} />
                <Tab label="Замки для квартиры" {...a11yProps(2)} />
                <Tab label="Замки для дома" {...a11yProps(3)} />
                <Tab label="Замки для отелей" {...a11yProps(4)} />
                <Tab label="Замки для офиса" {...a11yProps(5)} />
                <Tab label="Замки для шкафчиков" {...a11yProps(6)} />
                <Tab label="Замки для раздевалок" {...a11yProps(7)} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <S.Tabsimage src={image_1} alt="img" />
              </TabPanel>
              <TabPanel value={value} index={1}>
              <S.Tabsimage src={image_2} alt="" />
              </TabPanel>
              <TabPanel value={value} index={2}>
              <S.Tabsimage src={image_1} alt="" />
              </TabPanel>
              <TabPanel value={value} index={3}>
              <S.Tabsimage src={image_2} alt="img" />
              </TabPanel>
              <TabPanel value={value} index={4}>
              <S.Tabsimage src={image_1} alt="img" />
              </TabPanel>
              <TabPanel value={value} index={5}>
              <S.Tabsimage src={image_2} alt="img" />
              </TabPanel>
              <TabPanel value={value} index={6}>
              <S.Tabsimage src={image_1} alt="img" />
              </TabPanel>
              <TabPanel value={value} index={7}>
              <S.Tabsimage src={image_2} alt="img" />
              </TabPanel>
            </Box>
          </S.CatalogBox>
        </S.CatalogWarpper>
      </Modal>
    </div>
  );
}
