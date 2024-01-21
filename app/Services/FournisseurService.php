<?php
namespace App\Services;

use App\Exports\FournisseurExport;
use App\Imports\FournisseurImport;
use App\Models\Fournisseur;

use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class FournisseurService
{
    static function index()
    {
        try {

            return response()->json([
                'fournisseurs' => Fournisseur::orderBy('created_at', 'DESC')->get(),
                "kpis" => [
                    'fournisseur_active' => Fournisseur::where('is_active', true)->count(),
                    'fournisseur_inactive' => Fournisseur::where('is_active', false)->count(),
                    'fournisseur_achat' => Fournisseur::where('type', 'achat')->count(),
                    'fournisseur_transport' => Fournisseur::where('type', 'transport')->count(),
                ]
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 409);
        }
    }

    static function store($request)
    {
        try {
            DB::beginTransaction();

            $fournisseur = Fournisseur::create([
                'raison_social' => $request->raison_social,
                'name_fournisseur' => $request->name_fournisseur,
                'adresse' => $request->adresse,
                'ville' => $request->ville,
                'email' => $request->email,
                'fix' => '0' . $request->fix,
                'phone_no_1' => '0' . $request->phone_no_1,
                'commercial_name' => $request->commercial_name,
                'commercial_phone' => '0' . $request->commercial_phone,
                'commercial_email' => $request->commercial_email,
                'd_paiment' => $request->d_paiment,
                'm_paiment' => $request->m_paiment,
                'type' => $request->type,
                'is_active' => $request->is_active,
            ]);

            DB::commit();


            return response()->json([
                'fournisseur' => $fournisseur,
            ], 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                'message' => $th->getMessage()
            ], 409);
        }
    }
    static function update($id, $request)
    { {
            try {

                $fournisseur = Fournisseur::findOrFail($id);

                $fournisseur->update([
                    'raison_social' => $request->raison_social,
                    'name_fournisseur' => $request->name_fournisseur,
                        'adresse' => $request->adresse,
                        'ville' => $request->ville,
                        'email' => $request->email,
                        'fix' => '0' . $request->fix,
                        'phone_no_1' => '0' . $request->phone_no_1,
                        'commercial_name' => $request->commercial_name,
                        'commercial_phone' => '0' . $request->commercial_phone,
                        'commercial_email' => $request->commercial_email,
                        'd_paiment' => $request->d_paiment,
                        'm_paiment' => $request->m_paiment,
                        'type' => $request->type,
                        'is_active' => $request->is_active,
                ]);

                $fournisseur->refresh();

                return response()->json(['fournisseur' => $fournisseur], 200);
            } catch (\Throwable $e) {
                return response()->json(['error' => $e->getMessage()], 500);
            }
        }
    }

    static function delete($id)
    {
        try {

            Fournisseur::find($id)->delete();

            return response()->json([
                'message' => 'Fournisseur deleted successfully'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage()
            ], 409);
        }
    }
//     static function export()
//     {
//         try {
//             return Excel::download(new FournisseurExport, 'fournisseur.xlsx', \Maatwebsite\Excel\Excel::CSV);
//         } catch (\Throwable $th) {
//             return response()->json([
//                 'message' => $th->getMessage()
//             ], 409);
//         }
//     }
//     static function upload($request)
//     {
//         try {
//             $file = $request->file('file');
//             if ($file) {
//                 $FournisseurImport = new FournisseurImport($request->created_by);
//                 Excel::import($FournisseurImport, $file);
//             }
//             return response()->json([], 200);
//         } catch (\Throwable $th) {
//             return response()->json([
//                 'message' => $th->getMessage()
//             ], 409);
//         }
//     }
}
