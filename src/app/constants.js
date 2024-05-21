export const commandOptions = [
    { category: 'FTP', label: 'Upload Remessa FTP', value: 'mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },
    { category: 'FTP', label: 'Aprovar Remessa', value: 'mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },
    { category: 'FTP', label: 'Verificar Remessa Qualificada', value: 'mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },
    { category: 'FTP', label: 'Upload Retorno', value: 'mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },
    { category: 'FTP', label: 'Verificar Retorno Qualificado', value: 'mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },


    { category: 'CREATE USER', label: 'Make Credit User', value: 'mix test test/regression/open_sea/cadastro/credito_user_test.exs' },
    { category: 'CREATE USER', label: 'Make Current Account User', value: 'mix test test/regression/open_sea/cadastro/credito_user_test.exs' },
    { category: 'CREATE USER', label: 'Make Cambio User', value: 'mix test test/regression/open_sea/cadastro/credito_user_test.exs' },

    { category: 'CUC', label: 'CUC CREDIT', value: 'mix test test/regression/non_ui/cuc/cuc_credit_test.exs' },
    { category: 'CUC', label: 'CUC CURRENT ACCOUNT', value: 'mix test test/regression/non_ui/cuc/cuc_current_account_test.exs' },

    { category: 'TERMINATOR SUPPLY', label: 'Anchor Onboarding', value: 'mix test test/regression/open_sea/weel_supply/anchor_onboarding_test.exs' },
    { category: 'TERMINATOR SUPPLY', label: 'Referral Onboarding', value: 'mix test test/regression/open_sea/weel_supply/referral_onboarding_test.exs' },
    { category: 'TERMINATOR SUPPLY', label: 'Register Referral User', value: 'mix test test/regression/open_sea/weel_supply/referral_supply_registration_test.exs' },
    { category: 'TERMINATOR SUPPLY', label: 'Make Referral Operation', value: 'mix test test/regression/open_sea/weel_supply/referral_operation_test.exs' },
    { category: 'TERMINATOR SUPPLY', label: 'Upload Receivables to Referral', value: 'MIX_ENV=qa-venus mix test test/regression/open_sea/weel_supply/upload_receivables_to_referral.exs' },
    
    { category: 'TERMINATOR FINVENDAS', label: 'Make Finvendas PF Operation', value: 'mix test test/regression/open_sea/weel_pay/finvendas_with_cpf_buyer_test.exs' },
    { category: 'TERMINATOR FINVENDAS', label: 'Make Finvendas PJ Operation', value: 'mix test test/regression/open_sea/weel_pay/weel_pay_test.exs' },

  ];

export const environmentOptions = ['qa', 'qa2', 'qa-venus'];

export const categories = ['FTP', 'CREATE USER', 'CUC', 'TERMINATOR SUPPLY', 'TERMINATOR FINVENDAS']
