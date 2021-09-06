<?php

namespace App\Http\Controllers;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    //
    public function index()
    {
        $messages = Message::all();
        return response()->json([
            'messages' => $messages
        ], 200);
    }
    public function store(Request $request)
    {
        $msg = Message::create([
            'name' => $request->name,
            'email' => $request->email,
        ]);
        return response()->json(['sucess' => 'registered'], 200);
    }
    public function remove(Request $request)
    {
        $id = $request->route('id');
        Message::find($id)->delete();
        return response()->json(['sucess' => 'deleted'], 200);
    }
}
