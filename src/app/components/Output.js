"use client";
import React from "react";

const Output = ({ output, testStatus }) => {
  return (
    <>
      {testStatus === "success" ? (
        <div>
         {output.referral_user_email  &&
          <div>
            <div>Main User Email: {output.app_user_email} - Cnpj: {output.cnpj}</div>
            <div>Referal Email: {output.referral_user_email} - Referral Cnpj: {output.referral_cnpj}</div>
            <div>Second Sponsor Email: {output.sponsor2_email} - Second Sponsor Cnpj: {output.sponsor2_cnpj}</div>
          <br />
            <div><strong>REMESSAS GERADAS</strong></div>
            <div>REMESSA FILE: {output.remessa_generated_file}</div>
            <div>SEU NUMERO FOR MASS REMESSA:{output.remessa_generated_seu_numero}</div>
            <div>MASS REMESSA FILE: {output.mass_remessa_generated_file}</div>
            <div>SEU NUMERO FOR MASS REMESSA:{output.remessa_generated_seu_numero_for_mass_remessa}</div>
          </div>
        }
            <div>{output.message}</div>
            <div>{output.result}</div>
            <div>{output.number}</div>
        </div>
      ) : (
            <div className="output-container">{output}</div>
        )}
    </>
  );
};

export default Output;
