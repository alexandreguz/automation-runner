"use client";
import React from "react";

const Output = ({ output, testStatus }) => {
  return (
    <>
      {testStatus === "success" ? (
        <div >
         {output.referral_user_email  &&
          <div className="bg-slate-50" > 
            <div>Main User Email: {output.app_user_email} - Cnpj: {output.cnpj}</div>
            <div>Referal Email: {output.referral_user_email} - Referral Cnpj: {output.referral_cnpj}</div>
          <br />
            <div ><strong>REMESSAS GERADAS</strong></div>
            <div>REMESSA FILE: {output.remessa_generated_file}</div>
            <div>SEU NUMERO FOR MASS REMESSA:{output.remessa_generated_seu_numero}</div>
            <div>MASS REMESSA FILE: {output.mass_remessa_generated_file}</div>
            <div>SEU NUMERO FOR MASS REMESSA:{output.remessa_generated_seu_numero_for_mass_remessa}</div>
          </div>
        }
            <div className="text-5xl font-bold text-green-800">{output.message}</div>
            <div className="text-3xl">{output.result}</div>
            <div className="text-3xl">{output.number}</div>
        </div>
      ) : (
            <div className="text-3xl text-center font-bold text-red-600">{output}</div>
        )}
    </>
  );
};

export default Output;
