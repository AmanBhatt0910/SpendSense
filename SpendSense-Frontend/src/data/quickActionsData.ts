interface QuickAction {
    title: string;
    description: string;
    link: string;
  }
  
  const quickActionsData: QuickAction[] = [
    {
      title: "Add Income",
      description: "Track your income quickly.",
      link: "/income",
    },
    {
      title: "Add Expense",
      description: "Log your expenses with ease.",
      link: "/expense",
    },
    {
      title: "View Reports",
      description: "Generate detailed financial reports.",
      link: "/reports",
    },
  ];
  
  export default quickActionsData;
  