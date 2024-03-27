export const commandOptions = [
    { category: 'FTP', label: 'Upload Remessa FTP', value: 'mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },
    { category: 'FTP', label: 'Aprovar Remessa', value: 'mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },
    { category: 'FTP', label: 'Verificar Remessa Qualificada', value: 'mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },
    { category: 'FTP', label: 'Upload Retorno', value: 'mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },
    { category: 'FTP', label: 'Verificar Retorno Qualificado', value: 'mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },


    { category: 'CREATE USER', label: 'Make Credit User', value: 'mix test test/regression/open_sea/cadastro/credito_user_test.exs' },
    { category: 'CREATE USER', label: 'Make Current Account User', value: 'mix test test/regression/open_sea/cadastro/credito_user_test.exs' },
    { category: 'CREATE USER', label: 'Make Cambio User', value: 'mix test test/regression/open_sea/cadastro/credito_user_test.exs' },
    { category: 'CREATE USER', label: 'Make Finvendas User', value: 'mix test test/regression/open_sea/cadastro/credito_user_test.exs' },
    { category: 'CREATE USER', label: 'Make Ancora User', value: 'mix test test/regression/open_sea/cadastro/credito_user_test.exs' },
    { category: 'CREATE USER', label: 'Make Referral User', value: 'mix test test/regression/open_sea/cadastro/credito_user_test.exs' },

    { category: 'CUC', label: 'CUC CREDIT', value: 'mix test test/regression/non_ui/cuc/cuc_credit_test.exs' },
    { category: 'CUC', label: 'CUC CURRENT ACCOUNT', value: 'mix test test/regression/non_ui/cuc/cuc_current_account_test.exs' },
  ];

export const environmentOptions = ['qa', 'qa2', 'qa-venus'];

export const categories = ['FTP', 'CREATE USER', 'CUC']
