import React from "react";
import { useState } from "react";
import './Family.css'
const data = [
  {
    AccID: 8,
    CoaID: 8,
    AccNatureID: 1,
    AccNature: "Assets",
    AccCode: "11",
    AccNameCode: "11 -- ASSETS",
    AccName: "ASSETS",
    ParentCoaID: 0,
    ParentAccCode: "11",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "admin@wildventure.com",
    CreatedOn: "2023-07-27T17:47:45.953",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 9,
    CoaID: 9,
    AccNatureID: 1,
    AccNature: "Assets",
    AccCode: "11.01",
    AccNameCode: "11.01 -- CURRENT ASSETS",
    AccName: "CURRENT ASSETS",
    ParentCoaID: 8,
    ParentAccCode: "11.01",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "admin@wildventure.com",
    CreatedOn: "2023-07-27T17:47:56.427",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 11,
    CoaID: 11,
    AccNatureID: 1,
    AccNature: "Assets",
    AccCode: "11.01.01",
    AccNameCode: "11.01.01 -- CASH",
    AccName: "CASH",
    ParentCoaID: 9,
    ParentAccCode: "11.01.01",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "admin@wildventure.com",
    CreatedOn: "2023-07-27T17:57:03.383",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 12,
    CoaID: 12,
    AccNatureID: 1,
    AccNature: "Assets",
    AccCode: "11.01.01.001",
    AccNameCode: "11.01.01.001 -- CASH IN HAND",
    AccName: "CASH IN HAND",
    ParentCoaID: 11,
    ParentAccCode: "11.01.01.001",
    AccTypeID: 2,
    AccType: "Detail",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "admin@wildventure.com",
    CreatedOn: "2023-07-27T17:59:35.017",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 13,
    CoaID: 13,
    AccNatureID: 1,
    AccNature: "Assets",
    AccCode: "11.01.02",
    AccNameCode: "11.01.02 -- BANK",
    AccName: "BANK",
    ParentCoaID: 9,
    ParentAccCode: "11.01.02",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "admin@wildventure.com",
    CreatedOn: "2023-07-27T17:59:06.23",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 14,
    CoaID: 14,
    AccNatureID: 1,
    AccNature: "Assets",
    AccCode: "11.01.02.001",
    AccNameCode: "11.01.02.001 -- HABIB BANK LIMITED",
    AccName: "HABIB BANK LIMITED",
    ParentCoaID: 13,
    ParentAccCode: "11.01.02.001",
    AccTypeID: 2,
    AccType: "Detail",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "admin@wildventure.com",
    CreatedOn: "2023-07-27T18:00:09.99",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 26,
    CoaID: 26,
    AccNatureID: 1,
    AccNature: "Assets",
    AccCode: "11.01.03",
    AccNameCode: "11.01.03 -- ACCOUNT RECIEVEABLE",
    AccName: "ACCOUNT RECIEVEABLE",
    ParentCoaID: 9,
    ParentAccCode: "11.01.03",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "admin@wildventure.com",
    CreatedOn: "2023-07-27T18:14:52.35",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 88,
    CoaID: 88,
    AccNatureID: 1,
    AccNature: "Assets",
    AccCode: "11.01.03.00001",
    AccNameCode: "11.01.03.00001 -- UMER ABBAS",
    AccName: "UMER ABBAS",
    ParentCoaID: 26,
    ParentAccCode: "11.01.03.00001",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "FolioFinance",
    CreatedOn: "2023-08-08T12:55:10.96",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 89,
    CoaID: 89,
    AccNatureID: 1,
    AccNature: "Assets",
    AccCode: "11.01.03.00002",
    AccNameCode: "11.01.03.00002 -- SHABHI MAQSEED HUSAAIN",
    AccName: "SHABHI MAQSEED HUSAAIN",
    ParentCoaID: 26,
    ParentAccCode: "11.01.03.00002",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "FolioFinance",
    CreatedOn: "2023-08-08T12:55:28.463",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 28,
    CoaID: 28,
    AccNatureID: 1,
    AccNature: "Assets",
    AccCode: "11.01.03.01.001",
    AccNameCode: "11.01.03.01.001 -- SANOFI",
    AccName: "SANOFI",
    ParentCoaID: 27,
    ParentAccCode: "11.01.03.01.001",
    AccTypeID: 2,
    AccType: "Detail",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "admin@wildventure.com",
    CreatedOn: "2023-07-27T18:17:17.497",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 10,
    CoaID: 10,
    AccNatureID: 1,
    AccNature: "Assets",
    AccCode: "11.02",
    AccNameCode: "11.02 -- FIXED ASSETS",
    AccName: "FIXED ASSETS",
    ParentCoaID: 8,
    ParentAccCode: "11.02",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "admin@wildventure.com",
    CreatedOn: "2023-07-27T17:47:37.207",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 20,
    CoaID: 20,
    AccNatureID: 2,
    AccNature: "Expenses",
    AccCode: "33",
    AccNameCode: "33 -- EXPENSES",
    AccName: "EXPENSES",
    ParentCoaID: 0,
    ParentAccCode: "33",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "admin@wildventure.com",
    CreatedOn: "2023-07-27T18:06:00.893",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 21,
    CoaID: 21,
    AccNatureID: 2,
    AccNature: "Expenses",
    AccCode: "33.01",
    AccNameCode: "33.01 -- OTHER EXPENSE",
    AccName: "OTHER EXPENSE",
    ParentCoaID: 20,
    ParentAccCode: "33.01",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "admin@wildventure.com",
    CreatedOn: "2023-07-27T18:06:39.75",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 22,
    CoaID: 22,
    AccNatureID: 2,
    AccNature: "Expenses",
    AccCode: "33.02",
    AccNameCode: "33.02 -- SALARY EXPENSE",
    AccName: "SALARY EXPENSE",
    ParentCoaID: 20,
    ParentAccCode: "33.02",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "admin@wildventure.com",
    CreatedOn: "2023-07-27T18:07:12.103",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 24,
    CoaID: 24,
    AccNatureID: 2,
    AccNature: "Expenses",
    AccCode: "33.02.01",
    AccNameCode: "33.02.01 -- EMPLOYEES",
    AccName: "EMPLOYEES",
    ParentCoaID: 22,
    ParentAccCode: "33.02.01",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "admin@wildventure.com",
    CreatedOn: "2023-07-27T18:08:52.773",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 25,
    CoaID: 25,
    AccNatureID: 2,
    AccNature: "Expenses",
    AccCode: "33.02.01.001",
    AccNameCode: "33.02.01.001 -- UMER ZULFIQAR",
    AccName: "UMER ZULFIQAR",
    ParentCoaID: 24,
    ParentAccCode: "33.02.01.001",
    AccTypeID: 2,
    AccType: "Detail",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "admin@wildventure.com",
    CreatedOn: "2023-07-27T18:09:39.51",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 23,
    CoaID: 23,
    AccNatureID: 2,
    AccNature: "Expenses",
    AccCode: "33.03",
    AccNameCode: "33.03 -- PETTY CASH",
    AccName: "PETTY CASH",
    ParentCoaID: 20,
    ParentAccCode: "33.03",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "admin@wildventure.com",
    CreatedOn: "2023-07-27T18:07:49.93",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 91,
    CoaID: 91,
    AccNatureID: 3,
    AccNature: "Liabilities",
    AccCode: "11.01.03.00001",
    AccNameCode: "11.01.03.00001 -- SAAD ABBAS",
    AccName: "SAAD ABBAS",
    ParentCoaID: 17,
    ParentAccCode: "11.01.03.00001",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "FolioFinance",
    CreatedOn: "2023-08-08T12:56:57.027",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 15,
    CoaID: 15,
    AccNatureID: 3,
    AccNature: "Liabilities",
    AccCode: "22",
    AccNameCode: "22 -- LIABILITY",
    AccName: "LIABILITY",
    ParentCoaID: 0,
    ParentAccCode: "22",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "admin@wildventure.com",
    CreatedOn: "2023-07-27T18:01:25.223",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 16,
    CoaID: 16,
    AccNatureID: 3,
    AccNature: "Liabilities",
    AccCode: "22.01",
    AccNameCode: "22.01 -- CURRENT LIABILITY",
    AccName: "CURRENT LIABILITY",
    ParentCoaID: 15,
    ParentAccCode: "22.01",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "admin@wildventure.com",
    CreatedOn: "2023-07-27T18:01:54.65",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 17,
    CoaID: 17,
    AccNatureID: 3,
    AccNature: "Liabilities",
    AccCode: "22.02",
    AccNameCode: "22.02 -- ACCOUNT PAYABLE",
    AccName: "ACCOUNT PAYABLE",
    ParentCoaID: 15,
    ParentAccCode: "22.02",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "admin@wildventure.com",
    CreatedOn: "2023-07-27T18:02:23.343",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 19,
    CoaID: 19,
    AccNatureID: 3,
    AccNature: "Liabilities",
    AccCode: "22.02.01.001",
    AccNameCode: "22.02.01.001 -- IMTIAZ",
    AccName: "IMTIAZ",
    ParentCoaID: 18,
    ParentAccCode: "22.02.01.001",
    AccTypeID: 2,
    AccType: "Detail",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "admin@wildventure.com",
    CreatedOn: "2023-07-27T18:05:26.217",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "175.107.203.163",
  },
  {
    AccID: 29,
    CoaID: 29,
    AccNatureID: 4,
    AccNature: "Owners Equity",
    AccCode: "44",
    AccNameCode: "44 -- EQUITY",
    AccName: "EQUITY",
    ParentCoaID: 0,
    ParentAccCode: "44",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "FolioFinance",
    CreatedOn: "2023-07-31T17:15:24.09",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "",
  },
  {
    AccID: 30,
    CoaID: 30,
    AccNatureID: 4,
    AccNature: "Owners Equity",
    AccCode: "44.01",
    AccNameCode: "44.01 -- CAPITAL",
    AccName: "CAPITAL",
    ParentCoaID: 29,
    ParentAccCode: "44.01",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "FolioFinance",
    CreatedOn: "2023-07-31T17:16:22.263",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "",
  },
  {
    AccID: 31,
    CoaID: 31,
    AccNatureID: 4,
    AccNature: "Owners Equity",
    AccCode: "44.01. 001",
    AccNameCode: "44.01. 001 -- MR . JABBAR",
    AccName: "MR . JABBAR",
    ParentCoaID: 30,
    ParentAccCode: "44.01. 001",
    AccTypeID: 2,
    AccType: "Detail",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "FolioFinance",
    CreatedOn: "2023-07-31T17:19:44.737",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "",
  },
  {
    AccID: 32,
    CoaID: 32,
    AccNatureID: 5,
    AccNature: "Revenue (or income)",
    AccCode: "55",
    AccNameCode: "55 -- REVENUE",
    AccName: "REVENUE",
    ParentCoaID: 0,
    ParentAccCode: "55",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "FolioFinance",
    CreatedOn: "2023-07-31T17:20:28.353",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "",
  },
  {
    AccID: 33,
    CoaID: 33,
    AccNatureID: 5,
    AccNature: "Revenue (or income)",
    AccCode: "55.01",
    AccNameCode: "55.01 -- PROJECTS",
    AccName: "PROJECTS",
    ParentCoaID: 32,
    ParentAccCode: "55.01",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "FolioFinance",
    CreatedOn: "2023-07-31T17:21:31.047",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "",
  },
  {
    AccID: 34,
    CoaID: 34,
    AccNatureID: 5,
    AccNature: "Revenue (or income)",
    AccCode: "55.01.001",
    AccNameCode: "55.01.001 -- SALE",
    AccName: "SALE",
    ParentCoaID: 33,
    ParentAccCode: "55.01.001",
    AccTypeID: 1,
    AccType: "Group",
    Remarks: "",
    FyID: 0,
    IsActive: true,
    LoginId: "FolioFinance",
    CreatedOn: "2023-07-31T17:22:19.38",
    LoginId1: null,
    ModifiedOn: null,
    UserIP: "",
  },
];


const Dummypage = () => {
  const MenuItem = ({ item }) => {
    
    const [showChildren, setShowChildren] = useState(false);

    const handleClick = () => {
      setShowChildren(!showChildren);
    };

    return (
      <li>
        <button className="button" onClick={handleClick}>{showChildren ? '-' : '+'}</button>
        {item.AccName}
        {showChildren && item.children && item.children.length > 0 && (
          <ul style={{listStyle:'none'}}>
            {item.children.map(child => (
              <MenuItem key={child.AccID} item={child} />
            ))}
          </ul>
        )}
      </li>
    );
  };

  const buildNestedMenu = (parentId = 0) => {
    return data
      .filter(item => item.ParentCoaID === parentId)
      .map(item => ({
        ...item,
        children: buildNestedMenu(item.CoaID),
      }));
  };

  const topLevelItems = buildNestedMenu();

  return (
      <ul>
        {topLevelItems.map(item => (
          <MenuItem key={item.AccID} item={item} />
        ))}
      </ul>
  );
};

export default Dummypage;