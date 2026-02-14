package com.example.mobile

import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity

class ProfileActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_profile)

        // Optional: Add button functionality if needed
        val btnEditProfile = findViewById<Button>(R.id.btnEditProfile)
        btnEditProfile.setOnClickListener {
            // For now, just show a placeholder action
            // Later, you can open an EditProfileActivity or dialog
        }
    }
}
