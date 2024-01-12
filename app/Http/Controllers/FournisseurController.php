<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\FournisseurService;

class FournisseurController extends Controller
{
    public function index()
    {
        return FournisseurService::index();
    }

    public function store(Request $request)
    {
        return FournisseurService::store($request);
    }

    public function delete($id)
    {
        return FournisseurService::delete($id);
    }
    public function update($id, Request $request)
    {
        return FournisseurService::update($id, $request);
    }
    // public function export()
    // {
    //     return FournisseurService::export();
    // }
    // public function upload(Request $request)
    // {
    //     return FournisseurService::upload($request);
    // }
}
